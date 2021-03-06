package com.sofka.Software.controller;

import com.sofka.Software.models.ListTaskModel;
import com.sofka.Software.services.ListTaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Clase lista tareas controllador , permite mappear los servicios en la base de datos
 * @author Duvan Leal
 */
@Slf4j
@CrossOrigin
@RestController
public class ListTaskController {
    @Autowired
    private ListTaskService listTaskService;

    @GetMapping(path = "/listTasks")
    public Iterable<ListTaskModel> list(){
        return listTaskService.list();
    }

    @PostMapping(path = "/listTask")
    public ListTaskModel createListTask(@RequestBody ListTaskModel listTask){
        return listTaskService.createListTask(listTask);
    }

    @PutMapping(path = "/listTask/{id}")
    public ListTaskModel updatelistTask(@RequestBody ListTaskModel listTask, @PathVariable(value="id") Long id ) {
        listTaskService.updateListTask(id, listTask);
        return null;
    }

    @DeleteMapping(path = "/listTask/{id}")
    public void deletelistTask(@PathVariable("id")Long id){
        listTaskService.deleteListTask(id);
    }
}
