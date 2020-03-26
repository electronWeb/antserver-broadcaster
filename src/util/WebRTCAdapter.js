/* eslint-disable implicit-arrow-linebreak */

const sdpConstraints = {
  OfferToReceiveAudio: false,
  OfferToReceiveVideo: false,
};

const WebRTCAdaptor = (videoID, type = 'local') =>
  new window.WebRTCAdaptor({
    websocket_url: 'wss://peepfeeder.antmedia.io:5443/WebRTCAppEE/websocket',
    mediaConstraints: {
      video: type === 'local',
      audio: type === 'local',
    },
    peerconnection_config: null,
    sdp_constraints: sdpConstraints,
    localVideoId: type === 'local' ? videoID : undefined,
    remoteVideoId: type === 'remote' ? videoID : undefined,
    isPlayMode: type === 'remote',
    callback: info => {
      if (info === 'initialized') {
        console.log('initialized');
      } else if (info === 'publish_started') {
        // stream is being published
        console.log('publish started');
      } else if (info === 'publish_finished') {
        // stream is finished
        console.log('publish finished');
      } else if (info === 'screen_share_extension_available') {
        // screen share extension is avaiable
        console.log('screen share extension available');
      } else if (info === 'screen_share_stopped') {
        // "Stop Sharing" is clicked in chrome screen share dialog
        console.log('screen share stopped');
      }
    },
    callbackError: (error, err) => {
      // some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError
      console.log('error callback: ', error, err);
    },
  });

export default WebRTCAdaptor;
