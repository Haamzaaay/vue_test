<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title',30)->unique()->comment("The title of the book");
            $table->string('description',75)->comment("Description of the book");
            $table->string('slug')->nullable()->comment("Slug");
            $table->integer('price');
            $table->integer('quantity');
            $table->foreignId('author_id')->nullable()->constrained("users",'id')-> comment("the user who wrote the book");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};
