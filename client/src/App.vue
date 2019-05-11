<template>
  <div id="app">
    <Header></Header>
    <!--Creating container to put the two charts side by side-->
    <div class="container">
      <!--Both charts must be inside a single row and the columns are split 6 and 6-->
      <div class="row">
        <div class="col-md-6">
          <h2>Income</h2>
            <IncomeGraph v-if="dataLoaded" v-bind:chartData="incomeChartData" v-bind:options="options"></IncomeGraph>

            <div class="input-group">
              <input v-model.trim="newIncomeTransactionDescription" placeholder="Description">
              <input type="number" v-model.number="newIncomeTransactionAmount" placeholder="Amount">
              <button v-on:click="addIncomeTransaction">Add Transaction</button>
            </div>
        </div>

        <div class="col-md-6">
          <h2>Expenses</h2>
          <ExpenseGraph v-if="dataLoaded" v-bind:chartData="expenseChartData" v-bind:options="options"></ExpenseGraph>

          <div class="input-group">
            <input v-model.trim="newExpenseTransactionDescription" placeholder="Description">
            <input type="number" v-model.number="newExpenseTransactionAmount" placeholder="Amount">
            <button v-on:click="addExpenseTransaction">Add Transaction</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // tutorial found https://vue-chartjs.org/guide/#chart-with-api-data
  import Header from "@/components/Header";
  import IncomeGraph from "./components/IncomeGraph.vue";
  import ExpenseGraph from "./components/ExpenseGraph.vue";

  export default {
    name: 'app',
    components: {
      ExpenseGraph,
      IncomeGraph,
      Header,
    },
    data(){
      return {
        incomeData: [],
        incomeChartData: {},
        options:{},
        dataLoaded: false,
        newIncomeTransactionDescription: '',
        newIncomeTransactionAmount: '',

        expenseData: [],
        expenseChartData: {},
        newExpenseTransactionDescription: '',
        newExpenseTransactionAmount: ''
      }
    },
    mounted() {
      this.options = {
        // Pie chart options

      };
      this.loadChartData();
    },
    methods: {
      loadChartData(){
        this.$transactionService.getAll().then(transactions =>{
          var incomeTransactions = [];
          var expenseTransactions = [];

          // loop through all transactions and put all income transactions into a list
          transactions.forEach(function (instance) {
            if (instance.type === "Income"){
              incomeTransactions.push(instance)
            }else{
              expenseTransactions.push(instance)
            }
          });

          // Set all income transactions
          this.incomeData = incomeTransactions;
          // Set all expense transactions
          this.expenseData = expenseTransactions;

          let incomeLabels = this.incomeData.map(transactions => transactions.description);
          let incomeAmounts = this.incomeData.map(transactions => transactions.amount);
          let incomeColor = this.backgroundColor(incomeLabels.length);
          this.incomeChartData = {
            labels: incomeLabels,
            datasets: [{
              label: 'Income Transactions',
              data: incomeAmounts,
              backgroundColor: incomeColor
            }]
          };

          let expenseLabels = this.expenseData.map(transactions => transactions.description);
          let expenseAmounts = this.expenseData.map(transactions => transactions.amount);
          let expenseColor = this.backgroundColor(expenseLabels.length);
          this.expenseChartData = {
            labels: expenseLabels,
            datasets: [{
              label: 'Expense Transactions',
              data: expenseAmounts,
              backgroundColor: expenseColor
            }]
          };

          this.dataLoaded = true
        })
      },
      addIncomeTransaction(){
        // error handling for empty boxes
        if (!this.newIncomeTransactionDescription || !this.newIncomeTransactionAmount){
          alert("Enter description and amount");
        }else {
          this.$transactionService.addTransaction({ type: "Income", description: this.newIncomeTransactionDescription, amount: this.newIncomeTransactionAmount})
                  .then(response => {
                    this.newIncomeTransactionDescription = "";
                    this.newIncomeTransactionAmount = "";
                    this.loadChartData()
                  })
                  .catch(err => console.error(err))
        }
      },
      addExpenseTransaction(){
        // error handling for empty boxes
        if (!this.newExpenseTransactionDescription || !this.newExpenseTransactionAmount){
          alert("Enter description and amount");
        }else {
          this.$transactionService.addTransaction({ type: "Expense", description: this.newExpenseTransactionDescription, amount: this.newExpenseTransactionAmount})
                  .then(response => {
                    this.newExpenseTransactionDescription = "";
                    this.newExpenseTransactionAmount = "";
                    this.loadChartData()
                  })
                  .catch(err => console.error(err))
        }
      },
      backgroundColor(number){
        const colors = ['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C', '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#E67E2', '#D35400'];

        let chartColors = [];
        let counter = 0;
        for (let x = 0; x < number; x++){
          let color = colors[counter];
          chartColors.push(color);
          counter = ( counter + 1) % colors.length
        }
        return chartColors
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .input-group{
    padding-top: 50px;
  }
</style>
