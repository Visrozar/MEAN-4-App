import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { VclistService } from '../../services/vclist.service';
import { VcData } from '../../vcData.model';
import { FileUpload } from '../../fileupload';
import { UploadFileService } from '../../services/upload-file.service';
import { AuthService } from '../../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-vc-form',
  templateUrl: './vc-form.component.html',
  styleUrls: ['./vc-form.component.scss']
})

export class VcFormComponent implements OnInit, AfterViewInit {

  vcData: VcData;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  showError = false;
  showThanks = false;

  constructor(private uploadService: UploadFileService,
    public formService: FormService,
    public vclistService: VclistService,
    public authService: AuthService,
    private elem: ElementRef,
    private router: Router) {
    // this.focus = this.vclistService.focus;
    this.indication = this.vclistService.indication;
    // this.investment = this.vclistService.investment;
  }

  alreadyFileUpload = false;
  focusValid = false;
  stageValid = false;
  imageUploaded = false;
  focus: any = ['Therapeutics', 'Diagnostics', 'Medical devices', 'Agrobio', 'Health-tech'];
  indication: any = [];
  investment: any = ['Seed', 'Early Stage', 'Late Stage'];

  ngOnInit() {

    if (this.formService.vceditClick === true) {
      this.focusValid = true;
      this.stageValid = true;
      this.setEditForm();
      if (this.vcData.fileName) {
        this.alreadyFileUpload = true;
        this.imageUploaded = true;
      }
    } else {
      this.vcData = this.formService.getVcFormData();
      this.alreadyFileUpload = false;
    }
  }

  ngAfterViewInit() {
    if (this.formService.vceditClick === true) {
      let focus = [];
      focus = this.formService.vcdata.InvestmentFocus.split(', ');
      const input = $(`input[name=focu]`);
      for (let i = 0; i < focus.length; i++) {
        for (let j = 0; j < input.length; j++) {
          if (focus[i] === input[j].nextSibling.data) {
            input[j].checked = 'checked';
          }
        }
      }

      let stage = [];
      stage = this.formService.vcdata.InvestmentStage.split(', ');
      const input1 = $(`input[name=inves]`);
      for (let i = 0; i <= stage.length; i++) {
        for (let j = 0; j < input1.length; j++) {
          if (stage[i] === input1[j].nextSibling.data) {
            input1[j].checked = 'checked';
          }
        }
      }
    }
  }

  setEditForm() {
    this.vcData = this.formService.vcdata;
    if (!this.vcData.IndustryPartner) {
      this.vcData.IndustryPartner = this.formService.vcdata.Research.IndustryPartner;
    }
  }

  uploadFile() {
    if (this.elem.nativeElement.querySelector('#selectFile').files[0]) {
      const fileSelected: File = this.elem.nativeElement.querySelector('#selectFile').files[0];
      this.currentFileUpload = new FileUpload(fileSelected);
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
      this.formService.file = fileSelected.name;
      this.imageUploaded = true;
    }
  }

  removeFile() {
    this.alreadyFileUpload = false;
    // document.getElementById('selectFile').value = '';
    $('#selectFile').val('');
    this.formService.file = '';
    this.imageUploaded = false;
    this.currentFileUpload = null;
  }

  closeModal() {
    this.formService.vceditClick = false;
    this.router.navigate(['/vc_list']);
    if (this.formService.vcsubmited === true) {
      for (let i = 0; i < document.getElementsByTagName('form').length; i++) {
        document.getElementsByTagName('form')[i].reset();
      }
    }
    this.formService.vcsubmited = false;
    // this.formService.showThanks = false;
  }

  submit() {
    this.vcData.Research = { 'IndustryPartner': this.vcData.IndustryPartner };
    // this.formData.createdBy = this.username;
    if (this.formService.vceditClick === true) {
      this.vcData._id = this.formService.vcId;
      if (this.formService.file === '') {
        this.formService.fileName = '';
        this.formService.fileUrl = '';
        this.imageUploaded = false;
      }
      if (!this.vcData.fileName) {
        this.vcData.fileName = this.formService.fileName;
        this.vcData.fileUrl = this.formService.fileUrl;
      }

      this.authService.editVC(this.vcData).subscribe(data => {
        if (!data.success) {
          this.showThanks = false;
          this.showError = true;
          console.log(data.message); // Return error message
        } else {
          this.formService.resetVcData();
          this.showThanks = true;
          console.log(data.message); // Return success message
        }
      });
    } else {
      if (this.formService.file === '') {
        this.formService.fileName = '';
        this.formService.fileUrl = '';
        this.imageUploaded = false;
      }
      this.vcData.fileName = this.formService.fileName;
      this.vcData.fileUrl = this.formService.fileUrl;
      this.authService.newVC(this.vcData).subscribe(data => {
        if (!data.success) {
          this.showThanks = false;
          this.showError = true;
          console.log(data.message); // Return error message
        } else {
          this.formService.resetVcData();
          this.showThanks = true;
          console.log(data.message); // Return success message
        }
      });
    }
    this.formService.vcsubmited = true;
    // this.isFormValid = false;
  }

  goToStart() {
    this.showThanks = false;
    this.showError = false;
  }

  checkClicked() {
    const focusArray = [];
    const stageArray = [];
    const focus = $(`input[name=focu]:checked`);
    const stage = $(`input[name=inves]:checked`);

    if (focus.length !== 0) {
      for (let i = 0; i < focus.length; i++) {
        focusArray.push(focus[i].nextSibling.data);
      }
      this.focusValid = true;
    } else {
      this.focusValid = false;
    }

    if (stage.length !== 0) {
      for (let i = 0; i < stage.length; i++) {
        stageArray.push(stage[i].nextSibling.data);
      }
      this.stageValid = true;
    } else {
      this.stageValid = false;
    }
    this.vcData.InvestmentFocus = focusArray.join(', ');
    this.vcData.InvestmentStage = stageArray.join(', ');
  }

}
