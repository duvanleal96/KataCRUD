package com.sofka.Software.repositories;

import com.sofka.Software.models.ListModel;
import org.springframework.data.repository.CrudRepository;

/**
 * clase lista repositorio , extiende los metodos  propios de Sring,recibe el nombre de la tabla y el ID
 * @author Duvan Leal
 */
public interface ListRepository extends CrudRepository<ListModel, Long > {
}
