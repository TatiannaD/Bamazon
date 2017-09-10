//requiring mySQL and inquirer packages 
var mysql = require('mysql');
var inquirer = require('inquirer');

//creating connection to database 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Tatcut!3",
    database: "bamazon"
  });

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    display();
    console.log('select * from products');
});

function display () {
    connection.query('Select * from Products', function(err, res){
        if(err) throw err;
        for(var i = 0; i<res.length;i++){
            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);    
        }
        console.log(' ');
        inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the ID of the product you would like to purchase? (Choose 1-10)",
            validate: function(value) {
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
                    return true;
                } 
                else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "quantity",
            message: "How much would you like to purchase?",
            validate: function(value){
                if(isNaN(value)) {
                  return false;
                } 
                else {
                  return true;
                }
            }
            
        }
        ]).then(function(ans){
            var buying = (ans.id) - 1;
            var qty = parseInt(ans.quantity);
            var total = parseFloat(((res[buying].price)*qty).toFixed(2));

            if (res[buying].stock_quantity >= buying) {
                connection.query("UPDATE Products SET ? WHERE ?", [{stock_quantity: (res[buying].stock_quantity - qty)},{item_id: ans.id}], function(err, result){
                        if(err) throw err;
                        console.log("Awesome! Your total is $" + total.toFixed(2) + ". Your shipment should arrive in 2-3 business days.");
                    });
            }
            else {
                console.log("Sorry, there's not enough of this product in stock.");
            }
              anythingElse();
        })
            
            
    })
}
function anythingElse(){
     inquirer.prompt([{
        type: "confirm",
        name: "more",
        message: "Is there another item you would like to purchase?"
    }]).then(function(ans){
         if(ans.more) {
           display();
        } 
        else {
          console.log("BYE FELICIA!!!");
        }
    });
}
   



