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
              <input v-model.trim="newTransactionDescription" placeholder="Description">
              <input type="number" v-model.number="newTransactionAmount" placeholder="Amount">
              <button v-on:click="addTransaction">Add Transaction</button>
            </div>
        </div>

        <div class="col-md-6">
          <h2>Expenses</h2>
          <ExpenseGraph></ExpenseGraph>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    // tutorial found https://vue-chartjs.org/guide/#chart-with-api-data
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import IncomeGraph from "./components/IncomeGraph.vue";
  import ExpenseGraph from "./components/ExpenseGraph.vue";

  export default {
    name: 'app',
    components: {
      ExpenseGraph,
      IncomeGraph,
      Header,
      Footer
    },
    data(){
      return {
        incomeData: [],
        incomeChartData: {},
        options:{},
        dataLoaded: false,
        newTransactionDescription: '',
        newTransactionAmount: ''
      }
    },
    mounted() {
      this.options = {
        // Pie chart options

      };
      this.loadChartData()
    },
    methods: {
      loadChartData(){
        this.$transactionService.getAll().then(transactions =>{
          this.incomeData = transactions;

          let labels = this.incomeData.map(transactions => transactions.description);
          let amounts = this.incomeData.map(transactions => transactions.amount);
          let color = this.backgroundColor(labels.length);
          this.incomeChartData = {
            labels: labels,
            datasets: [{
              label: 'Income Transactions',
              data: amounts,
              backgroundColor: color
            }]
          };
          this.dataLoaded = true
        })
      },
      addTransaction(){
        // error handling for empty boxes
        if (!this.newTransactionDescription || !this.newTransactionAmount){
          alert("Enter description and amount");
        }else {
          this.$transactionService.addTransaction({ description: this.newTransactionDescription, amount: this.newTransactionAmount})
                  .then(response => {
                    this.newTransactionDescription = "";
                    this.newTransactionAmount = "";
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
