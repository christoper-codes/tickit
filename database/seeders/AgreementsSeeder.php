<?php

namespace Database\Seeders;

use App\Models\Agreement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AgreementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Agreement::create([
            'institution_id' => 1,
            'global_season_id' => null,
            'name' => 'ejecutivos victoria',
            'description' => 'convenio promocion elevada',
            'start_date' => null,
            'end_date' => null,
            'is_active' => true
        ]);
    }
}
