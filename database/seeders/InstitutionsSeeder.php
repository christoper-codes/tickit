<?php

namespace Database\Seeders;

use App\Models\Institution;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InstitutionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Institution::create([
            'stadium_id' => 1,
            'global_image_id' => null,
            'name' => 'victoria',
            'description' => 'institucion generica',
            'is_active' => true
        ]);
    }
}
