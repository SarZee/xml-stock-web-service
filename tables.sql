-- header definition

CREATE TABLE header (
	ID_Shipment INTEGER NOT NULL,
	Name TEXT NOT NULL,
	Address TEXT NOT NULL,
	Tel TEXT NOT NULL,
	Order_date TEXT NOT NULL,
	Send_date TEXT NOT NULL,
	Shipment_cost INTEGER NOT NULL,
	Shipping_company TEXT NOT NULL,
	Tracker_number TEXT NOT NULL,
	Order_status TEXT NOT NULL
);

-- detail definition

CREATE TABLE detail (
	ID_order INTEGER NOT NULL,
	ID_product INTEGER NOT NULL,
	Product_name TEXT NOT NULL,
	Product_price INTEGER NOT NULL,
	Amount INTEGER NOT NULL,
	Total_price INTEGER NOT NULL
);

-- inventory definition

CREATE TABLE inventory (
	ID_product INTEGER NOT NULL,
	Product_name TEXT NOT NULL,
	Product_price INTEGER NOT NULL,
	Expire_date TEXT NOT NULL,
	Product_quantity INTEGER NOT NULL,
	Product_status TEXT NOT NULL
);

-- master definition

CREATE TABLE master (
	Shipping_cost INTEGER NOT NULL);