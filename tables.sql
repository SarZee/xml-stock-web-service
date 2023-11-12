-- inventory definition

CREATE TABLE inventory (
	ID_product INTEGER,
	Product_name TEXT,
	Product_price INTEGER,
	Expire_date TEXT,
	Product_quantity INTEGER,
	Product_status TEXT
);

-- header definition

CREATE TABLE header (
	ID_Shipment INTEGER,
	Name TEXT,
	Address TEXT,
	Tel TEXT,
	Order_date TEXT,
	Send_date TEXT,
	Shipment_cost INTEGER,
	Shipping_company TEXT,
	Tracker_number TEXT,
	Order_status TEXT
);

-- detail definition

CREATE TABLE detail (
	ID_order INTEGER,
	ID_product INTEGER,
	Product_name TEXT,
	Product_price INTEGER,
	Amount INTEGER,
	Total_price INTEGER
);

-- master definition

CREATE TABLE master (
	Shipping_cost INTEGER
);