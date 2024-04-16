import { Component, ElementRef, signal, untracked, viewChild } from '@angular/core';
import { IStudent } from './i-student.interface';

@Component({
  selector: 'app-objects',
  standalone: true,
  imports: [],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent {

  students = signal<IStudent[]>([]);
  isEditMode = signal<boolean>(false);
  editIndex: number = -1;

  editName = viewChild<ElementRef>('editName');
  editSurname = viewChild<ElementRef>('editSurname');
  editClassroom = viewChild<ElementRef>('editClassroom');

  addStudent(name: string, surname: string, classroom: string) {
    let newStudent: IStudent = {
      name: name,
      surname: surname,
      classroom: classroom
    }
    this.students.update(items => [...items, newStudent]);
  };

  deleteStudent(index: number) {
    this.students.update(current => {
      current.splice(index, 1);
      return current;
    })
  }

  editStudent(index: number) {
    this.editIndex = index;
    this.isEditMode.set(true);
    this.editName()?.nativeElement.focus();
  }

  updateStudent() {
     untracked(() => this.isEditMode.set(false));
     this.students.update(items => {
      items[this.editIndex] = {
        name: this.editName()?.nativeElement.value,
        surname: this.editSurname()?.nativeElement.value,
        classroom: this.editClassroom()?.nativeElement.value
      };
      this.editIndex = -1;
      return items;
    })
  }

  undo() {
    this.editIndex = -1;
    this.isEditMode.set(false);
  }

}
