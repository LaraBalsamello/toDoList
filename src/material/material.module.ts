import { NgModule } from "@angular/core";
import { MatCheckboxModule, MatInputModule, MatIconModule } from "@angular/material";

const materialModules = [
    MatCheckboxModule, MatInputModule, MatIconModule
]

@NgModule ({
    imports: materialModules, 
    exports: materialModules
})

export class MaterialModule {}