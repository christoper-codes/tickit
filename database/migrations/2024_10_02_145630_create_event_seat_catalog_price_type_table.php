<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event_seat_catalog_price_type', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_seat_catalog_id')->constrained('event_seat_catalog');
            $table->foreignId('price_type_id')->constrained('price_types');
            $table->decimal('price', 14, 4)->default('0.0000');
            $table->foreignId('price_catalogue_id')->constrained('price_catalogues');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_seat_catalog_price_type');
    }
};
