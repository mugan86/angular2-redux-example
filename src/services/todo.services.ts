import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Todo } from './../models/todo';

import { HttpService } from './../core/http.service';

import { TodoAppStore } from './../app/app.store';

@Injectable()
export class TodoAppService {

    // Redux based variables
    todos: Observable<Array<Todo>>;

    constructor(
        private http: HttpService,
        private store: Store<TodoAppStore>
    ) { 
        this.todos = store.select( store => store.todos );
    }

    addTodo(todo)
    {
        let action = {type: "ADD_TODO", payload: todo};
        this.store.dispatch(action);
    }

    /*loadCampaigns() {
        return this.http.get(this.campaignUrl)
                        .map((res: Response) => {
                            let body = res.json();
                            return body.data || {};
                        })
                        .map((payload: Campaign[]) => {
                            return { type: 'ADD_CAMPAIGNS', payload };
                        })
                        .subscribe((action) => {
                            this.store.dispatch(action);
                        });
    }*/
}