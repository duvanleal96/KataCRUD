package com.sofka.Software.repositories;

import com.sofka.Software.models.ListTaskModel;
import org.springframework.data.repository.CrudRepository;

public interface ListTaskRepository extends CrudRepository<ListTaskModel, Long> {
}
