ALTER TABLE "admin_data" RENAME COLUMN "name" TO "login";--> statement-breakpoint
ALTER TABLE "admin_data" ADD COLUMN "password_hash" varchar(255);