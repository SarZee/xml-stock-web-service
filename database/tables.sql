-- header definition

CREATE TABLE header (
	ID_shipment TEXT,
	Name TEXT,
	Address TEXT,
	Tel TEXT,
	ID_order TEXT,
	Order_date TEXT,
	Sent_date TEXT,
	Shipment_cost NUMERIC,
	Shipping_company TEXT,
	Track_no TEXT,
	Order_status TEXT
);

-- detail definition

CREATE TABLE detail (
	ID_order TEXT,
	ID_product TEXT,
	Product_name TEXT,
	Product_price NUMERIC,
	Product_quantity INTEGER,
	Total_price NUMERIC
);

-- inventory definition

CREATE TABLE inventory (
	ID_product TEXT,
	Product_name TEXT,
	Product_price NUMERIC,
	Product_quantity INTEGER,
	Expire_date TEXT,
	Product_status TEXT
);

-- master definition

CREATE TABLE master (
	ID_shipment TEXT,
	Shipping_cost NUMERIC
);