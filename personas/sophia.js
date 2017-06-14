var sophia = {
  name : "Sophia",
  budgetAmount : 1500,
  instructions : "Try to make it through to the end of the month without exceeding your budget.",
  mandatoryExpenses: {
    "Rent" : 60,
    "School Fees" : 40,
    "Transport" : 100,
    "Water and electricity" : 30
  },
  unexpectedexpense: {
    "text" : "Sophias son broke his leg while playing soccer for his high school team., and the doctors fee totals at 400",
    "expense" : 400
  },
  weekOneOptions : [
    {
        productName : "Bread",
        price       : 15,
        image       : '../public/img/bread.jpg'

    },
    {
        productName : "Milk",
        price       : 20,
        image       : "../public/img/milk.jpg"

    },
    {
        productName : "Rice",
        price       : 60,
        image       : "../public/img/rice.jpg"

    },
    {
        productName : "Sugar",
        price       : 45,
        image       : "../public/img/sugar.jpg"

    }
  ],
  weekTwoOptions : [
    {
        productName : "Chicken",
        price       : 120,
        image       : "../public/img/chicken.jpg"

    },
    {
        productName : "Bread",
        price       : 15,
        image       : "../public/img/bread.jpg"

    },
    {
        productName : "Butternut",
        price       : 30,
        image       : "../public/img/butternut.jpg"

    },
    {
        productName : "Watermelon",
        price       : 35,
        image       : "../public/img/watermelon.jpg"

    },
  ],
  weekThreeOptions : [
    {
        productName : "Bread",
        price       : 15,
        image       : "../public/img/bread.jpg"

    },
    {
        productName : "Milk",
        price       : 20,
        image       : "../public/img/milk,jpg"

    },
    {
        productName : "Rice",
        price       : 60,
        image       : "../public/img/rice.jpg"

    },
    {
        productName : "Sugar",
        price       : 45,
        image       : "../public/img/sugar.jpg"

    },
  ],
  weekFourOptions : [
    {
        productName : "Bread",
        price       : 15,
        image       : "../public/img/bread.jpg"

    },
    {
        productName : "Milk",
        price       : 20,
        image       : "../public/img/milk.jpg"

    },
    {
        productName : "Rice",
        price       : 60,
        image       : "../public/img/rice.jpg"

    },
    {
        productName : "Sugar",
        price       : 45,
        image       : "../public/img/sugar.jpg"

    }],
    story: "Sophia is a single mother of three from Kinshasa in the Democratic Republic of Congo." +
        "She has a very tight budget which does not allow for " +
        "unplanned spending. A surprise expense, such as a medical bill, could mean the end of her" +
        "allowance for food and water for the month. She uses JUMO for situations where she needs money fast, but" +
        "she often has to pay the late penalty for significant unanticipated fees. She would be interested in a" +
        "medical aid product or medical loan product in the future.",
    image: "image"
}

module.exports = sophia
