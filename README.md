[![Dependency Status](https://david-dm.org/lmangani/sipfix.svg)](https://david-dm.org/lmangani/sipfix)

[![Logo](https://avatars0.githubusercontent.com/u/6690913?v=3&s=100)](http://sipcapture.org)

# sipfix
Oracle / Acme SIPFIX Decoder for Node JS

## Description
**ORACLE /ACME PACKET** Net-Net SBCs feature a built in *"Capture Agent"* able to send session data using a custom **IPFIX** template exporting SIP messages and Statistics in realtime from the core. 

**SIPFIX** decoder powers applications such as [HEPFIX](https://github.com/sipcapture/hepfix.js), converting IPFIX to HEP for usage with [HOMER](https://github.com/sipcapture) and [HEPIC](http://hepic.tel) without requiring phisical port mirroring and external switches/probes/agents.

### Install:
```
npm install sipfix
```

### Usage
See [HEPfix](https://github.com/sipcapture/hepfix.js) for an example usage of the library functionality.
