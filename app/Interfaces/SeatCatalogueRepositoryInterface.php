<?php

namespace App\Interfaces;

interface SeatCatalogueRepositoryInterface
{
     /*
    * |--------------------------------------------------------------------------
    * | Primaries methods for the repository interface
    */
    public function getAll();
    public function getAllSeatsForStadium(int $id);
    public function getById($id);
    public function save(array $data);
    public function saveAllSeatsForStadium(array $data);
    public function update($id, array $data);
    public function delete($id);

    /*
    * |--------------------------------------------------------------------------
    * | Custom methods for the repository interface
    */
}
