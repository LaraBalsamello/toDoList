import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ListService {
	constructor(private httpClient: HttpClient) {}

	getList(): Observable<any> {
		return this.httpClient.get(environment.url + '/to-do-list/list').pipe(
			map((list: any) => {
				return list;
			})
		);
	}
}
