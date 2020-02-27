function utc(timestampId){
    document.write(new Date(timestampId*1000).toUTCString().slice(-11,-4));
  }
  utc(1581582686);