package com.sofka.Software.controller;

import com.sofka.Software.models.ListModel;
import com.sofka.Software.services.ListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Clase lista de controllador , permite mappear los servicios en la base de datos
 * @author Duvan Leal
 */
@Slf4j
@CrossOrigin
@RestController
public class ListController {
        @Autowired
        private ListService listRepository;

        @GetMapping(value = "/listas")
        public Iterable<ListModel> list(){
            return listRepository.list();
        }

        @PostMapping(value = "/task")
        public ListModel createList(@RequestBody ListModel lista){
            return listRepository.createList(lista);
        }

         @DeleteMapping(value = "/task/{id}")
         public void deleteTask(@PathVariable("id")Long id){
         listRepository.deleteTask(id);
         }
}
