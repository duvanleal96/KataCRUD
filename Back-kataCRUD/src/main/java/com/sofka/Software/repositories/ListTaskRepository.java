package com.sofka.Software.repositories;

import com.sofka.Software.models.ListTaskModel;
import org.springframework.data.repository.CrudRepository;

/**
 * clase lista tarea repositorio , extiende los metodos  propios de Sring, recibe el nombre de la tabla y el ID
 * @author Duvan Leal
 */
public interface ListTaskRepository extends CrudRepository<ListTaskModel, Long> {
}
