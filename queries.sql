-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select 
    p.productname,
    c.categoryname
from Product as p
join Category as c
    on p.categoryId = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select
    s.companyname,
    o.Id
from Shipper as s
join [Order] as o
    on o.shipvia = s.id
    where o.orderdate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select 
    o.Id,
    p.productname,
    o.quantity
from OrderDetail as o
join Product as p
    on p.Id = o.productId
    where o.orderId = '10251'
    order by p.productname;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select
    o.Id as 'Order Id',
    c.companyname as 'Customer Company Name',
    e.lastname as 'Employee Last Name'
from [Order] as o
join Customer as c
    on o.customerId = c.Id
join Employee as e
    on e.Id = o.employeeId;