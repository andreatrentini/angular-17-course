import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsComponent } from './effects/effects.component';
import { InputModelContainerComponent } from './input-model-container/input-model-container.component';
import { ArrayComponent } from './array/array.component';
import { ObjectsComponent } from './objects/objects.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: 'signals', component: SignalsComponent },
    { path: 'computedsignal', component: ComputedSignalComponent },
    { path: 'effects', component: EffectsComponent},
    { path: 'input', component: InputModelContainerComponent},
    { path: 'arrays', component: ArrayComponent},
    { path: 'objects', component: ObjectsComponent},
    { path: 'services', component: ServicesComponent},
];
