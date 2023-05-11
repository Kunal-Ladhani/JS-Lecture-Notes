import express from 'express';
import { Service } from '../services/service';
import { Server, Path, GET, POST, PUT, DELETE, PathParam, QueryParam, HttpMethod } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

@Path('/users')
class Controller {

    @Inject
    private service: Service;

    // @GetMapping('')
    @GET
    getAllUsers(): Array<Number> {
        return this.service.getUsers();
    }

}

export { Controller };