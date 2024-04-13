CREATE TABLE IF NOT EXISTS "admin_data" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"login" varchar(255),
	"password_hash" varchar(255),
	"is_logged" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255),
	"content" text,
	"time_to_read" varchar(255),
	"date_of_creation" date DEFAULT now(),
	"title_image_path" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contact_me_data" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"message" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255),
	"description" text,
	"github_link" varchar(255)
);
