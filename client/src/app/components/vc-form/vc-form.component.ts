import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { VclistService } from '../../services/vclist.service';
import { VcData } from '../../vcData.model';
import { FileUpload } from '../../fileupload';
import { UploadFileService } from '../../services/upload-file.service';
declare var $: any;

@Component({
  selector: 'app-vc-form',
  templateUrl: './vc-form.component.html',
  styleUrls: ['./vc-form.component.scss']
})
export class VcFormComponent implements OnInit {
  // @Input() vcData;
  vcData: VcData;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  showError = false;

  constructor(private uploadService: UploadFileService,
    public formService: FormService,
    public vclistService: VclistService,
    private elem: ElementRef,
    private router: Router) {
    this.focus = this.vclistService.focus;
    this.indication = this.vclistService.indication;
    this.investment = this.vclistService.investment;
  }

  focusActive = false;
  indicationActive = false;
  stageActive = false;
  focusDisabled = true;
  indicationDisabled = true;
  stageDisabled = true;
  alreadyFileUpload = false;
  focusValid = false;
  stageValid = false;
  focus: any = [];
  indication: any = [];
  investment: any = [];

  ngOnInit() {

    if (this.formService.vceditClick === true) {
      this.vcData = this.formService.vcdata;
    } else {
      this.vcData = this.formService.getVcFormData();
    }

    if (this.formService.vceditClick === true) {
      this.vcData = this.formService.vcdata;
      if (this.vcData.fileName) {
        this.alreadyFileUpload = true;
      }
    } else {
      this.vcData = this.formService.getVcFormData();
      this.alreadyFileUpload = false;
    }

    const self = this;
    document.addEventListener('click', function (event) {
      if (event.srcElement.className.toString() !== 'overSelect' &&
        event.srcElement.className.toString() !== 'hide-box' && self.router.url.toString() === '/vc_form') {
        self.focusDisabled = true;
        self.indicationDisabled = true;
        self.stageDisabled = true;
      }
    });
  }

  uploadFile() {
    if (this.elem.nativeElement.querySelector('#selectFile').files[0]) {
      const fileSelected: File = this.elem.nativeElement.querySelector('#selectFile').files[0];
      this.currentFileUpload = new FileUpload(fileSelected);
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
      // this.formService.file = fileSelected.name;
    }
  }

  removeFile() {
    this.alreadyFileUpload = false;
    // document.getElementById('selectFile').value = '';
    $('#selectFile').val('');
    // this.formService.file = '';
}

  closeModal() {
    this.formService.vceditClick = false;
    this.formService.resetVcData();
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
    // this.formData.createdBy = this.username;
    if (this.formService.vceditClick === true) {
      // this.formData._id = this.formService.id;
      if (this.formService.file === '') {
        this.formService.fileName = '';
        this.formService.fileUrl = '';
      }
      this.vcData.fileName = this.formService.fileName;
      this.vcData.fileUrl = this.formService.fileUrl;
      this.uploadService.editVC(this.vcData).subscribe(data => {
        if (!data.success) {
          this.formService.showThanks = false;
          this.showError = true;
          console.log(data.message); // Return error message
        } else {
          this.formService.showThanks = true;
          console.log(data.message); // Return success message
        }
      });
    } else {
      if (this.formService.file === '') {
        this.formService.fileName = '';
        this.formService.fileUrl = '';
      }
      this.vcData.fileName = this.formService.fileName;
      this.vcData.fileUrl = this.formService.fileUrl;
      this.uploadService.newVC(this.vcData).subscribe(data => {
        if (!data.success) {
          this.formService.showThanks = false;
          this.showError = true;
          console.log(data.message); // Return error message
        } else {
          this.formService.showThanks = true;
          console.log(data.message); // Return success message
        }
      });
    }
    this.formService.vcsubmited = true;
    // this.isFormValid = false;
  }

  showCheckboxes(type: string) {

    if (type === 'focus' && this.focusDisabled === true) {
      this.focusDisabled = false;
      this.focusActive = true;
    } else {
      this.focusDisabled = true;
      this.focusActive = false;
    }

    if (type === 'indication' && this.indicationDisabled === true) {
      this.indicationActive = true;
      this.indicationDisabled = false;
    } else {
      this.indicationActive = false;
      this.indicationDisabled = true;
    }

    if (type === 'stage' && this.stageDisabled === true) {
      this.stageActive = true;
      this.stageDisabled = false;
    } else {
      this.stageActive = false;
      this.stageDisabled = true;
    }
  }

  checkClicked() {
    const focus = $(`input[name=focu]:checked`);
    const stage = $(`input[name=inves]:checked`);

    if (focus.length !== 0) {
      this.focusValid = true;
    } else {
      this.focusValid = false;
    }

    if (stage.length !== 0) {
      this.stageValid = true;
    } else {
      this.stageValid = false;
    }
  }

}
