/*
 IPFIX Parser for ACME types
 (c) 2017 QXIP BV
 Author: L. Mangani
*/

// SIPFIX Functions
var r = require('restructure');

// Structs

var Header = new r.Struct({
  Version: 	r.uint16,
  Length: 	r.uint16,
  ExportTime: 	r.uint32,
  SeqNum: 	r.uint32,
  ObservationID: r.uint32,
  SetID: 	r.uint16,
  SetLen: 	r.uint16
});

var HandShake = new r.Struct({
  Version: 	r.uint16,
  Length: 	r.uint16,
  ExportTime: 	r.uint32,
  SeqNum: 	r.uint32,
  ObservationID: r.uint32,
  SetID: 	r.uint16,
  SetLen: 	r.uint16,
  MaVer:	r.uint16,
  MiVer:	r.uint16,
  CFlags1:	r.uint16,
  CFlags1:	r.uint16,
  SFlags:	r.uint16,
  Timeout:	r.uint16,
  SystemID:	r.uint32,
  Product:	r.uint16,
  Major:	r.uint8,
  Minor:	r.uint8,
  Revision:	r.uint8,
  HostnameLen:	r.uint8,
  Hostname:	new r.String('HostnameLen', 'utf8')
});


var SipOut = new r.Struct({
  Version: 	r.uint16,
  Length: 	r.uint16,
  ExportTime: 	r.uint32,
  SeqNum: 	r.uint32,
  ObservationID: r.uint32,
  SetID: 	r.uint16,
  SetLen: 	r.uint16,
  TimeSec:	r.uint32,
  TimeMic:	r.uint32,
  IntSlot:	r.uint8,
  IntPort:	r.uint8,
  IntVlan:	r.uint16,
  CallIDLen:	r.uint8,
  CallID:	new r.String('CallIDLen', 'utf8'),
  CallIDEnd:	r.uint8,
  IPlen:	r.uint16,
  VLan:		r.uint8,
  Tos:		r.uint8,
  Tlen:		r.uint16,
  TID:		r.uint16,
  TFlags:	r.uint16,
  TTL:		r.uint8,
  TProto:	r.uint8,
  TPos:		r.uint16,
  SrcIP:	new r.Array(r.uint8, 4),
  DstIP:	new r.Array(r.uint8, 4),
  DstPort:	r.uint16,
  SrcPort:	r.uint16,
  UDPLen:	r.uint16,
  SipMsgLen:	r.uint16,
  SipMsg:	new r.String('SipMsgLen', 'utf8')
});

var SipIn = new r.Struct({
  Version: 	r.uint16,
  Length: 	r.uint16,
  ExportTime: 	r.uint32,
  SeqNum: 	r.uint32,
  ObservationID: r.uint32,
  SetID: 	r.uint16,
  SetLen: 	r.uint16,
  TimeSec:	r.uint32,
  TimeMic:	r.uint32,
  IntSlot:	r.uint8,
  IntPort:	r.uint8,
  IntVlan:	r.uint16,
  CallIDEnd:	r.uint8,
  IPlen:	r.uint16,
  VLan:		r.uint8,
  Tos:		r.uint8,
  Tlen:		r.uint16,
  TID:		r.uint16,
  TFlags:	r.uint16,
  TTL:		r.uint8,
  TProto:	r.uint8,
  TPos:		r.uint16,
  SrcIP:	new r.Array(r.uint8, 4),
  DstIP:	new r.Array(r.uint8, 4),
  DstPort:	r.uint16,
  SrcPort:	r.uint16,
  UDPLen:	r.uint16,
  SipMsgLen:	r.uint16,
  SipMsg:	new r.String('SipMsgLen', 'utf8')
});

var SipOutTCP = new r.Struct({
  Version: 	r.uint16,
  Length: 	r.uint16,
  ExportTime: 	r.uint32,
  SeqNum: 	r.uint32,
  ObservationID: r.uint32,
  SetID: 	r.uint16,
  SetLen: 	r.uint16,
  TimeSec:	r.uint32,
  TimeMic:	r.uint32,
  IntSlot:	r.uint8,
  IntPort:	r.uint8,
  IntVlan:	r.uint16,
  DstIP:	new r.Array(r.uint8, 4),
  SrcIP:	new r.Array(r.uint8, 4),
  DstPort:	r.uint16,
  SrcPort:	r.uint16,
  Context:	r.uint32,
  CallIDLen:	r.uint8,
  CallID:	new r.String('CallIDLen', 'utf8'),
  CallIDEnd:	r.uint8,
  SipMsgLen:	r.uint16,
  SipMsg:	new r.String('SipMsgLen', 'utf8')
});

var SipInTCP = new r.Struct({
  Version: 	r.uint16,
  Length: 	r.uint16,
  ExportTime: 	r.uint32,
  SeqNum: 	r.uint32,
  ObservationID: r.uint32,
  SetID: 	r.uint16,
  SetLen: 	r.uint16,
  TimeSec:	r.uint32,
  TimeMic:	r.uint32,
  IntSlot:	r.uint8,
  IntPort:	r.uint8,
  IntVlan:	r.uint16,
  DstIP:	new r.Array(r.uint8, 4),
  SrcIP:	new r.Array(r.uint8, 4),
  DstPort:	r.uint16,
  SrcPort:	r.uint16,
  Context:	r.uint32,
  CallIDEnd:	r.uint8,
  SipMsgLen:	r.uint16,
  SipMsg:	new r.String('SipMsgLen', 'utf8')
});


var StatsQos = new r.Struct({
  	Version: 	r.uint16,
  	Length: 	r.uint16,
  	ExportTime: 	r.uint32,
  	SeqNum: 	r.uint32,
  	ObservationID: r.uint32,
  	SetID: 	r.uint16,
  	SetLen: 	r.uint16,

	IncRtpBytes:       r.uint32,
	IncRtpPackets:     r.uint32,
	IncRtpLostPackets: r.uint32,
	IncRtpAvgJitter:   r.uint32,
	IncRtpMaxJitter:   r.uint32,

	IncRtcpBytes:       r.uint32,
	IncRtcpPackets:     r.uint32,
	IncRtcpLostPackets: r.uint32,
	IncRtcpAvgJitter:   r.uint32,
	IncRtcpMaxJitter:   r.uint32,
	IncRtcpAvgLat:      r.uint32,
	IncRtcpMaxLat:      r.uint32,

	IncrVal: r.uint32,
	IncMos:  r.uint32,

	OutRtpBytes:       r.uint32,
	OutRtpPackets:     r.uint32,
	OutRtpLostPackets: r.uint32,
	OutRtpAvgJitter:   r.uint32,
	OutRtpMaxJitter:   r.uint32,

	OutRtcpBytes:       r.uint32,
	OutRtcpPackets:     r.uint32,
	OutRtcpLostPackets: r.uint32,
	OutRtcpAvgJitter:   r.uint32,
	OutRtcpMaxJitter:   r.uint32,
	OutRtcpAvgLat:      r.uint32,
	OutRtcpMaxLat:      r.uint32,

	OutrVal: r.uint32,
	OutMos:  r.uint32,

	Type: r.uint8,

	CallerIncSrcIP:   new r.Array(r.uint8, 4),
	CallerIncDstIP:   new r.Array(r.uint8, 4),
	CallerIncSrcPort: r.uint16,
	CallerIncDstPort: r.uint16,

	CalleeIncSrcIP:   new r.Array(r.uint8, 4),
	CalleeIncDstIP:   new r.Array(r.uint8, 4),
	CalleeIncSrcPort: r.uint16,
	CalleeIncDstPort: r.uint16,

	CallerOutSrcIP:   new r.Array(r.uint8, 4),
	CallerOutDstIP:   new r.Array(r.uint8, 4),
	CallerOutSrcPort: r.uint16,
	CallerOutDstPort: r.uint16,

	CalleeOutSrcIP:   new r.Array(r.uint8, 4),
	CalleeOutDstIP:   new r.Array(r.uint8, 4),
	CalleeOutSrcPort: r.uint16,
	CalleeOutDstPort: r.uint16,

	CallerIntSlot: r.uint8,
	CallerIntPort: r.uint8,
	CallerIntVlan: r.uint16,

	CalleeIntSlot: r.uint8,
	CalleeIntPort: r.uint8,
	CalleeIntVlan: r.uint16,

	BeginTimeSec: r.uint32,
	BeginTimeMic: r.uint32,

	EndTimeSec:   r.uint32,
	EndinTimeMic: r.uint32,

	Seperator: r.uint8,

	IncRealmLen:	r.uint16,
	IncRealm:	new r.String('IncRealmLen', 'utf8'),
	IncRealmEnd: 	r.uint8,

	OutRealmLen:	r.uint16,
	OutRealm:	new r.String('OutRealmLen', 'utf8'),
	OutRealmEnd: 	r.uint8,

	IncCallIDLen:	r.uint16,
	IncCallID:	new r.String('IncCallIDLen', 'utf8'),
	IncCallIDEnd: 	r.uint8,

	OutCallIDLen:	r.uint16,
	OutCallID:	new r.String('OutCallIDLen', 'utf8')
});



// Exports

exports.version = "1.0.1";

exports.readHeader = function(buffer){
	var stream = new r.DecodeStream(buffer);
	try { return Header.decode(stream); } catch (e) { console.log(e); return null; }
};

exports.writeHeader = function(result){
	var stream = new r.EncodeStream();
	Header.encode(stream, result);
	try { return stream.buffer; } catch (e) { console.log(e); return null; }
};

exports.readHandshake = function(buffer){
	var stream = new r.DecodeStream(buffer);
	try { return HandShake.decode(stream); } catch (e) { console.log(e); return null; }
};

exports.writeHandshake = function(result){
	var stream = new r.EncodeStream();
	HandShake.encode(stream, result);
	try { return stream.buffer; } catch (e) { console.log(e); return null; }
};

exports.SipIn = function(buffer){
	var stream = new r.DecodeStream(buffer);
	try { return SipIn.decode(stream); } catch(e) { console.log(e); return null; }
};

exports.SipOut = function(buffer){
	var stream = new r.DecodeStream(buffer);
	try { return SipOut.decode(stream); } catch(e) { console.log(e); return null; }
};

exports.SipInTCP = function(buffer){
	var stream = new r.DecodeStream(buffer);
	try { return SipInTCP.decode(stream); } catch(e) { console.log(e); return null; }
};

exports.SipOutTCP = function(buffer){
	var stream = new r.DecodeStream(buffer);
	try { return SipOutTCP.decode(stream); } catch(e) { console.log(e); return null; }
};

exports.StatsQos = function(buffer){
	try { return StatsQos.decode( new r.DecodeStream(buffer) ); } catch(e) { console.log(e); return null; }
};

// QoS Handling for HEPFIX.JS

/* RTP PAYLOAD INC/OUT */

exports.getPayloadIncRTP = function(qos){

  return {
	"CORRELATION_ID": qos.IncCallID ,
	"RTP_SIP_CALL_ID": qos.IncCallID ,
	"REPORT_TS": qos.BeginTimeSec,
	"TL_BYTE": qos.IncRtpBytes,
	"SKEW":0.000,
	"TOTAL_PK": qos.IncRtpPackets,
	"EXPECTED_PK":   (qos.IncRtpPackets+qos.IncRtpLostPackets) ,
	"PACKET_LOSS":  qos.IncRtpLostPackets,
	"SEQ":0,
	"JITTER": qos.IncRtpAvgJitter,
	"MAX_JITTER": qos.IncRtpMaxJitter,
	"MEAN_JITTER": qos.IncRtpAvgJitter,
	"DELTA":0.000,
	"MAX_DELTA": 0.000,
	"MAX_SKEW":0.000,
	"MIN_MOS": qos.IncMos, 
	"MEAN_MOS": qos.IncMos, 
	"MOS":  qos.IncMos,
	"RFACTOR": qos.IncrVal,
	"MIN_RFACTOR": qos.IncrVal,
	"MEAN_RFACTOR": qos.IncrVal,
	"SRC_IP": qos.CallerIncSrcIP , 
	"SRC_PORT": qos.CallerIncSrcPort, 
	"DST_IP": qos.CallerIncDstIP ,
	"DST_PORT": qos.CallerIncSrcPort,
	"SRC_MAC":"00-00-00-00-00-00",
	"DST_MAC":"00-00-00-00-00-00",
	"OUT_ORDER":0,
	"SSRC_CHG":0,
	"CODEC_PT": qos.Type, 
	"CLOCK":8000,
	"CODEC_NAME": qos.Type ,
	"DIR":0,
	"REPORT_NAME": "RTP:"+qos.IncRealm+':'+ qos.OutRealm ,
	"PARTY":0,
	"TYPE":"PERIODIC"
  };
};

exports.getPayloadOutRTP = function(qos){
  return {
	"CORRELATION_ID": qos.OutCallID ,
	"RTP_SIP_CALL_ID": qos.OutCallID ,
	"REPORT_TS": qos.BeginTimeSec,
	"TL_BYTE": qos.OutRtpBytes,
	"SKEW":0.000,
	"TOTAL_PK": qos.OutRtpPackets,
	"EXPECTED_PK":  (qos.OutRtpPackets+qos.OutRtpLostPackets),
	"PACKET_LOSS":  qos.OutRtpLostPackets,
	"SEQ":0,
	"JITTER": qos.OutRtpAvgJitter,
	"MAX_JITTER": qos.OutRtpMaxJitter,
	"MEAN_JITTER": qos.OutRtpAvgJitter,
	"DELTA":0.000,
	"MAX_DELTA": 0.000,
	"MAX_SKEW":0.000,
	"MIN_MOS": qos.OutMos, 
	"MEAN_MOS": qos.OutMos, 
	"MOS":  qos.OutMos,
	"RFACTOR": qos.OutrVal,
	"MIN_RFACTOR": qos.OutrVal,
	"MEAN_RFACTOR": qos.OutrVal,
	"SRC_IP": qos.CalleeOutSrcIP , 
	"SRC_PORT": qos.CalleeOutSrcPort, 
	"DST_IP": qos.CalleeOutDstIP ,
	"DST_PORT": qos.CalleeOutDstPort,
	"SRC_MAC":"00-00-00-00-00-00",
	"DST_MAC":"00-00-00-00-00-00",
	"OUT_ORDER":0,
	"SSRC_CHG":0,
	"CODEC_PT": qos.Type, 
	"CLOCK":8000,
	"CODEC_NAME": qos.Type ,
	"DIR":1,
	"REPORT_NAME": "RTP:"+qos.OutRealm+':'+ qos.IncRealm ,
	"PARTY":1,
	"TYPE":"PERIODIC"
  };
};


/* RTCP PAYLOAD INC/OUT: */

exports.getPayloadIncRTCP = function(qos){

  return {
	"CORRELATION_ID": qos.IncCallID ,
	"RTP_SIP_CALL_ID": qos.IncCallID ,
	"REPORT_TS": qos.BeginTimeSec,
	"TL_BYTE": qos.IncRtcpBytes,
	"SKEW":0.000,
	"TOTAL_PK": qos.IncRtcpPackets,
	"EXPECTED_PK":  (qos.IncRtcpPackets+qos.IncRtcpLostPackets),
	"PACKET_LOSS":  qos.IncRtcpLostPackets,
	"SEQ":0,
	"JITTER": qos.IncRtcpAvgJitter,
	"MAX_JITTER": qos.IncRtcpMaxJitter,
	"MEAN_JITTER": qos.IncRtcpAvgJitter,
	"DELTA": qos.IncRtcpAvgLat,
	"MAX_DELTA":  qos.IncRtcpMaxLat,
	"MAX_SKEW":0.000,
	"MIN_MOS": qos.IncMos, 
	"MEAN_MOS": qos.IncMos, 
	"MOS":  qos.IncMos,
	"RFACTOR": qos.IncrVal,
	"MIN_RFACTOR": qos.IncrVal,
	"MEAN_RFACTOR": qos.IncrVal,
	"SRC_IP": qos.CallerIncSrcIP , 
	"SRC_PORT": qos.CallerIncSrcPort, 
	"DST_IP": qos.CallerIncDstIP ,
	"DST_PORT": qos.CallerIncSrcPort,
	"SRC_MAC":"00-00-00-00-00-00",
	"DST_MAC":"00-00-00-00-00-00",
	"OUT_ORDER":0,
	"SSRC_CHG":0,
	"CODEC_PT": qos.Type, 
	"CLOCK":8000,
	"CODEC_NAME": qos.Type ,
	"DIR":0,
	"REPORT_NAME": "RTCP:"+qos.IncRealm+':'+ qos.OutRealm ,
	"PARTY":0,
	"TYPE":"PERIODIC"
  };
};

exports.getPayloadOutRTCP = function(qos){

  return {
	"CORRELATION_ID": qos.OutCallID ,
	"RTP_SIP_CALL_ID": qos.OutCallID ,
	"REPORT_TS": qos.BeginTimeSec,
	"TL_BYTE": qos.OutRtcpBytes,
	"SKEW":0.000,
	"TOTAL_PK": qos.OutRtcpPackets,
	"EXPECTED_PK":  (qos.OutRtcpPackets+qos.OutRtcpLostPackets),
	"PACKET_LOSS":  qos.OutRtcpLostPackets,
	"SEQ":0,
	"JITTER": qos.OutRtcpAvgJitter,
	"MAX_JITTER": qos.OutRtcpMaxJitter,
	"MEAN_JITTER": qos.OutRtcpAvgJitter,
	"DELTA": qos.OutRtcpAvgLat,
	"MAX_DELTA":  qos.OutRtcpMaxLat,
	"MAX_SKEW":0.000,
	"MIN_MOS": qos.OutMos, 
	"MEAN_MOS": qos.OutMos, 
	"MOS":  qos.OutMos,
	"RFACTOR": qos.OutrVal,
	"MIN_RFACTOR": qos.OutrVal,
	"MEAN_RFACTOR": qos.OutrVal,
	"SRC_IP": qos.CalleeOutSrcIP , 
	"SRC_PORT": qos.CalleeOutSrcPort, 
	"DST_IP": qos.CalleeOutDstIP ,
	"DST_PORT": qos.CalleeOutDstPort,
	"SRC_MAC":"00-00-00-00-00-00",
	"DST_MAC":"00-00-00-00-00-00",
	"OUT_ORDER":0,
	"SSRC_CHG":0,
	"CODEC_PT": qos.Type, 
	"CLOCK":8000,
	"CODEC_NAME": qos.Type ,
	"DIR":1,
	"REPORT_NAME": "RTCP:"+qos.OutRealm+':'+ qos.IncRealm ,
	"PARTY":1,
	"TYPE":"PERIODIC"
  };
};


