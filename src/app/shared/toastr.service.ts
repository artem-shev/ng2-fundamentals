import { Injectable, OpaqueToken } from '@angular/core';

export const TOASTR_TOKEN = new OpaqueToken('toastr');

export interface IToastr {
    success(msg: string, title?: string, overrides?: object) : void;
    info(msg: string, title?: string, overrides?: object) : void;
    error(msg: string, title?: string, overrides?: object) : void;
    warning(msg: string, title?: string, overrides?: object) : void;
};