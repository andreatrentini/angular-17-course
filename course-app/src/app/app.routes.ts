import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsComponent } from './effects/effects.component';
import { InputModelContainerComponent } from './input-model-container/input-model-container.component';

export const routes: Routes = [
    { path: 'signals', component: SignalsComponent },
    { path: 'computedsignal', component: ComputedSignalComponent },
    { path: 'effects', component: EffectsComponent},
    { path: 'input', component: InputModelContainerComponent}
];
