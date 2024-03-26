-- Task Order:
[
  { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
];

-- Output:
[
    {_id: "Steel beam", totalUrgentQuantity: 50},
    {_id: "Iron rod", totalUrgentQuantity: 60}
]



-- Stage 1 : Filter - Urgent Order

SELECT * FROM Order WHERE status = "urgent";  

[
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]

-- Stage 2 : Group - In each product find totalUrgentQuantity

-- step 1 : Query
SELECT * FROM Order
WHERE status = "urgent"
GROUP BY productName

-- step 2 : Final Query
SELECT productName AS _id  SUM(quantity) AS totalUrgentQuantity FROM Order
WHERE status = "urgent"
GROUP BY productName

-- Output:
[
    {_id: "Steel beam", totalUrgentQuantity: 50},
    {_id: "Iron rod", totalUrgentQuantity: 60}
]