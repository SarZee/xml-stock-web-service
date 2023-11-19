-- header definition

CREATE TABLE header (
	ID_shipment INTEGER,
	Name TEXT,
	Address TEXT,
	Tel TEXT,
	Order_date TEXT,
	Sent_date TEXT,
	Shipment_cost NUMERIC,
	Shipping_company TEXT,
	Tracker_no TEXT,
	Order_status TEXT,
	ID_order INTEGER
);

CREATE UNIQUE INDEX header_ID_shipment_IDX ON header (ID_shipment);

-- detail definition

CREATE TABLE detail (
	ID_order INTEGER,
	ID_product INTEGER,
	Product_name TEXT,
	Product_price NUMERIC,
	Product_quantity INTEGER,
	Total_price NUMERIC
);

CREATE INDEX detail_ID_order_IDX ON detail (ID_order);

-- inventory definition

CREATE TABLE inventory (
	ID_product INTEGER,
	Product_name TEXT,
	Product_price NUMERIC,
	Product_quantity INTEGER,
	Expire_date TEXT,
	Product_status TEXT
);

CREATE UNIQUE INDEX inventory_ID_product_IDX ON inventory (ID_product);

-- master definition

CREATE TABLE master (
	ID_shipment INTEGER,
	Shipping_cost NUMERIC
);

CREATE UNIQUE INDEX master_ID_shipment_IDX ON master (ID_shipment);