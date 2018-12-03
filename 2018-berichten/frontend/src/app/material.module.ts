
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatDividerModule } from "@angular/material";

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule],
    exports: [MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule],
})

export class MaterialModule {}