# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_06_11_141951) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "cocktail_ingredients", force: :cascade do |t|
    t.bigint "cocktail_recipe_id", null: false
    t.string "name", null: false
    t.string "quantity"
    t.string "preparation_notes"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cocktail_recipe_id"], name: "index_cocktail_ingredients_on_cocktail_recipe_id"
  end

  create_table "cocktail_instructions", force: :cascade do |t|
    t.bigint "cocktail_recipe_id", null: false
    t.integer "step_number", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cocktail_recipe_id"], name: "index_cocktail_instructions_on_cocktail_recipe_id"
  end

  create_table "cocktail_recipes", force: :cascade do |t|
    t.string "name", null: false
    t.string "image"
    t.string "category"
    t.string "glassware"
    t.string "garnish"
    t.string "ice"
    t.decimal "abv", precision: 5, scale: 2
    t.text "story"
    t.text "bartender_tips"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cocktail_tags", force: :cascade do |t|
    t.bigint "cocktail_recipe_id", null: false
    t.string "tag_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cocktail_recipe_id"], name: "index_cocktail_tags_on_cocktail_recipe_id"
  end

  create_table "cocktail_tools", force: :cascade do |t|
    t.bigint "cocktail_recipe_id", null: false
    t.string "tool_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cocktail_recipe_id"], name: "index_cocktail_tools_on_cocktail_recipe_id"
  end

  create_table "employee_contacts", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.string "phone_number"
    t.string "email"
    t.string "emergency_contact_name"
    t.string "emergency_contact_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employee_contacts_on_employee_id"
  end

  create_table "employee_credentials", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "role", default: "employee", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employee_credentials_on_employee_id"
    t.index ["username"], name: "index_employee_credentials_on_username", unique: true
  end

  create_table "employee_details", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.date "hire_date"
    t.string "status", default: "inactive", null: false
    t.string "contract_type"
    t.integer "working_hours_per_week"
    t.string "shift_preference"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employee_details_on_employee_id"
  end

  create_table "employees", force: :cascade do |t|
    t.string "name", null: false
    t.string "surname", null: false
    t.string "job_role", null: false
    t.text "description"
    t.string "profile_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cocktail_ingredients", "cocktail_recipes"
  add_foreign_key "cocktail_instructions", "cocktail_recipes"
  add_foreign_key "cocktail_tags", "cocktail_recipes"
  add_foreign_key "cocktail_tools", "cocktail_recipes"
  add_foreign_key "employee_contacts", "employees"
  add_foreign_key "employee_credentials", "employees"
  add_foreign_key "employee_details", "employees"
end
