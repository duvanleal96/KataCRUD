package com.sofka.Software.repositories;

import com.sofka.Software.models.ListModel;
import org.springframework.data.repository.CrudRepository;

public interface ListRepository extends CrudRepository<ListModel, Long > {
}
