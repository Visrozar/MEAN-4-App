import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal }            from '../../../formData.model';
import { FormService }     from '../../../services/form.service';

@Component({
  selector: 'app-deal-description',
  templateUrl: './deal-description.component.html',
  styleUrls: ['./deal-description.component.scss']
}) 

 
export class DealDescriptionComponent implements OnInit {
    title = 'What do you do?';
    workType: string;
    form: any;
    
    constructor(private router: Router, private FormService: FormService) {
    }
 
    ngOnInit() {
        this.workType = this.FormService.getWork();
        console.log('Work feature loaded!');
    }
 
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.FormService.setWork(this.workType);
        return true;
    }
 
    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    }
 
    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/form_result']);
        }
    }
}
