"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientWrapper_1 = require("./clientWrapper");
const dyondoApi = (0, clientWrapper_1.createDyondoApiClient)({ endpoint: "http://localhost:8000/api" });
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA4OGUyNDQzMmU3ZDUyYmRmM2QyYTgiLCJpYXQiOjE2NDc2MzcwOTUsImV4cCI6MTY0NzcyMzQ5NX0.hbItLGgfpYKraKQRquScMCWvQ4kWGPIwMWT8v-D9-Ck';
dyondoApi.postCreateTag({ tag: { name: 'Some Tags' } }, { headers: { Authorization: `Bearer ${token}` } })
    .then(data => {
    console.dir(data, { depth: null });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXNEO0FBRXRELE1BQU0sU0FBUyxHQUFHLElBQUEscUNBQXFCLEVBQUMsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQyxDQUFDO0FBRWpGLE1BQU0sS0FBSyxHQUFHLDhLQUE4SyxDQUFDO0FBQzdMLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBQyxHQUFHLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFDLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFDLEVBQUMsQ0FBQztLQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVEeW9uZG9BcGlDbGllbnR9IGZyb20gJy4vY2xpZW50V3JhcHBlcic7XG5cbmNvbnN0IGR5b25kb0FwaSA9IGNyZWF0ZUR5b25kb0FwaUNsaWVudCh7ZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaVwifSk7XG5cbmNvbnN0IHRva2VuID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpmYVdRaU9pSTJNakE0T0dVeU5EUXpNbVUzWkRVeVltUm1NMlF5WVRnaUxDSnBZWFFpT2pFMk5EYzJNemN3T1RVc0ltVjRjQ0k2TVRZME56Y3lNelE1TlgwLmhiSXRMR2dmcFlLcmFLUVJxdVNjTUNXdlE0a1dHUEl3TVdUOHYtRDktQ2snO1xuZHlvbmRvQXBpLnBvc3RDcmVhdGVUYWcoe3RhZzoge25hbWU6ICdTb21lIFRhZ3MnfX0sIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9fSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5kaXIoZGF0YSwge2RlcHRoOiBudWxsfSlcbiAgICB9KSJdfQ==