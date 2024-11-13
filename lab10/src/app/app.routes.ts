import { Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'array-one', component: ArrayOneComponent},
    {path: 'array-two', component: ArrayTwoComponent}
];
