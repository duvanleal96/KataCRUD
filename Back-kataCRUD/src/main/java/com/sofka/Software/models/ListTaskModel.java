package com.sofka.Software.models;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

/**
 * Clase lista tarea modelo , se implementa los atributos id, completado y nombre ademas la creacion de sus tablas con el @colum
 * @Data implementa los metodos lombok,@Entity permite la interacion con la BD @table es el nombre de la
 * tabla en la BD
 * @autor Duvan Leal
 */
@Data
@Entity
@Table(name = "listaTarea")
public class ListTaskModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    @Column(unique = true, nullable = false)
    private Boolean completed;
    @Column(unique = true, nullable = false)
    private String name;

    /**
     * relacion muchos a uno , implementa la relacion con la clase primaria lista
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "listTask_id", nullable = false)

    @JsonBackReference
    private ListModel listaid;


}
