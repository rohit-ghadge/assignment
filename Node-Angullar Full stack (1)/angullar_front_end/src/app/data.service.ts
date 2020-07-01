import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
getdata()
{
return this.http.get("http://localhost:2000/player");
}
adddata(emp:any)
{
  return this.http.post("http://localhost:2000/player",emp);
}

getdatabyid(no)
{
  return this.http.get("http://localhost:2000/player/"+no);

}

UpdateData(emp)
{
  return this.http.put("http://localhost:2000/player/"+emp.no,emp);

}

DeleteData(no)
{
  return this.http.delete("http://localhost:2000/player/"+no);
}


}
