"use strict";

//require necessary node packages
const express = require("express");
const serve = require("express-static");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const sophia = require("./personas/sophia.js")

function splitWeekOptions(weekRow1, weekRow2, weekOptions) {
    weekRow1.push(weekOptions[0], weekOptions[1]);
    weekRow2.push(weekOptions[2], weekOptions[3]);
}
//configure port env
app.set("port", (process.env.PORT || 5001));

//set express handlebars as view engine
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//configure middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//configure express-static
app.use(serve("public"));

var budget = 0;

//GET
//page that displays the app name
app.get("/", function(req, res) {
    res.render("home");
});

//POST
//click a button to begin the process
app.post("/", function(req, res) {
    var nextButton = req.body.nextButton;
    if (nextButton) {
        res.redirect("/instructions");
    }
})

//GET
//Display instructions
app.get("/instructions", function(req, res) {
    res.render("instructions", {
        budget: sophia.budgetAmount,
        instructions: sophia.instructions
    });
});

//POST
//"Begin budgetting" button
app.post("/instructions", function(req, res) {
    var beginButton = req.body.beginButton;
    if (beginButton) {
        res.redirect("/week1");
    }
});

//GET
//Displays choices for additional expenses
//Displays mandatory expenses
//mandatory expenses are deducted from the budget
app.get("/week1", function(req, res) {
    //the starting budget is determined by the persona object
    budget = sophia.budgetAmount;

    var totalMandatoryExpenses = 0;

    for (let expense in sophia.mandatoryExpenses) {
        totalMandatoryExpenses += sophia.mandatoryExpenses[expense];
    }

    budget -= totalMandatoryExpenses;

    var data = {
        weekOneOptions: sophia.weekOneOptions,
        currentBudget: budget,
        mandatoryExpenses: sophia.mandatoryExpenses
    }
    var weekOptions1 = [];
    var weekOptions2 = [];

    splitWeekOptions(weekOptions1, weekOptions2, data.weekOneOptions)


    res.render("week", {
        weekOptions1,
        weekOptions2,
        currentBudget: data.currentBudget,
        mandatoryExpenses: data.mandatoryExpenses,
        week: "First Week"
    });


});

//POST
//Optional expenses are deducted from budget, and user
//is redirected to following week after submission is clicked
app.post("/week1", function(req, res) {
    const submitButton = req.body.submitButton;

    if (submitButton) {
        var checkboxOptions = req.body.weekCheckbox;
        if (checkboxOptions.constructor !== Array) {
            checkboxOptions = [checkboxOptions];
        }
        var total = 0;

        checkboxOptions.forEach((price) => total += Number(price));

        budget -= total;
        res.redirect("/week2");
    };
});

//GET
//Displays choices for additional expenses
//Displays mandatory expenses
//mandatory expenses are deducted from the budget
app.get("/week2", function(req, res) {

    var totalMandatoryExpenses = 0;

    for (let expense in sophia.mandatoryExpenses) {
        totalMandatoryExpenses += sophia.mandatoryExpenses[expense];
    }

    budget -= totalMandatoryExpenses;

    var data = {
        weekTwoOptions: sophia.weekTwoOptions,
        currentBudget: budget,
        mandatoryExpenses: sophia.mandatoryExpenses
    }

    var weekOptions1 = [];
    var weekOptions2 = [];

    splitWeekOptions(weekOptions1, weekOptions2, data.weekTwoOptions);
    res.render("week", {
        weekOptions1,
        weekOptions2,
        currentBudget: data.currentBudget,
        mandatoryExpenses: data.mandatoryExpenses,
        week: "Second Week"
    });


});

//POST
//Optional expenses are deducted from budget, and user
//is redirected to the unexpectedexpense route
app.post("/week2", function(req, res) {
    const submitButton = req.body.submitButton;

    if (submitButton) {
        var checkboxOptions = req.body.weekCheckbox;
        if (checkboxOptions.constructor !== Array) {
            checkboxOptions = [checkboxOptions];
        }
        var total = 0;

        checkboxOptions.forEach((price) => total += Number(price));

        budget -= total;
        res.redirect("/unexpected");
    };
});

//GET
//Displays choices for additional expenses
//Displays mandatory expenses
//mandatory expenses are deducted from the budget
app.get("/week3", function(req, res) {

    var totalMandatoryExpenses = 0;

    for (let expense in sophia.mandatoryExpenses) {
        totalMandatoryExpenses += sophia.mandatoryExpenses[expense];
    }

    budget -= totalMandatoryExpenses;

    var data = {
        weekThreeOptions: sophia.weekThreeOptions,
        currentBudget: budget,
        mandatoryExpenses: sophia.mandatoryExpenses
    }
    var weekOptions1 = [];
    var weekOptions2 = [];

    splitWeekOptions(weekOptions1, weekOptions2, data.weekThreeOptions)
    res.render("week", {
        weekOptions1,
        weekOptions2,
        currentBudget: data.currentBudget,
        mandatoryExpenses: data.mandatoryExpenses,
        week: "Third Week"
    });


});

//POST
//Optional expenses are deducted from budget, and user
//is redirected to following week after submission is clicked
app.post("/week3", function(req, res) {
    const submitButton = req.body.submitButton;

    if (submitButton) {
        var checkboxOptions = req.body.weekCheckbox;
        if (checkboxOptions.constructor !== Array) {
            checkboxOptions = [checkboxOptions];
        }
        var total = 0;

        checkboxOptions.forEach((price) => total += Number(price));

        budget -= total;
        res.redirect("/week4");
    };
});

//GET
//Displays choices for additional expenses
//Displays mandatory expenses
//expenses are deducted from the budget
app.get("/week4", function(req, res) {

    var totalMandatoryExpenses = 0;

    for (let expense in sophia.mandatoryExpenses) {
        totalMandatoryExpenses += sophia.mandatoryExpenses[expense];
    }

    budget -= totalMandatoryExpenses;

    var data = {
        weekFourOptions: sophia.weekFourOptions,
        currentBudget: budget,
        mandatoryExpenses: sophia.mandatoryExpenses
    }
    var weekOptions1 = [];
    var weekOptions2 = [];

    splitWeekOptions(weekOptions1, weekOptions2, data.weekFourOptions)
    res.render("week", {
        weekOptions1,
        weekOptions2,
        currentBudget: data.currentBudget,
        mandatoryExpenses: data.mandatoryExpenses,
        week: "Fourth Week"
    });

});

//POST
//Optional expenses are deducted from budget, and user
//is redirected to the testimony page when clicking submit
app.post("/week4", function(req, res) {
    const submitButton = req.body.submitButton;

    if (submitButton) {
        var checkboxOptions = req.body.weekCheckbox;
        if (checkboxOptions.constructor !== Array) {
            checkboxOptions = [checkboxOptions];
        }
        var total = 0;

        checkboxOptions.forEach((price) => total += Number(price));

        budget -= total;
        res.redirect("/story");
    };
});

//GET
//Displays an unexpected expense associated with the persona
//Shows the amount deducted, as well as the current budget after the deduction
app.get("/unexpected", function(req, res) {
  budget -= sophia.unexpectedexpense.expense;

res.render("unexpected", {
  text : sophia.unexpectedexpense.text,
  expense : sophia.unexpectedexpense.expense,
  budget  : budget
})
});

//POST
//After clicking next, user is redirected to the following week
app.post("/unexpected", function(req, res) {
  var week3 = req.body.week3;

  if (week3){
    res.redirect('/week3')
  }

});


app.get("/story", function(req, res) {
res.render("story", {
  name : sophia.name,
  story : sophia.story,
  initialBudget : sophia.budgetAmount,
  budget : budget
})
})

app.post("/story", function(req, res) {
var startAgain = req.body.startAgain;
if (startAgain) {
  res.redirect('/')
}

})

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
