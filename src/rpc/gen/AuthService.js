//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = require('./auth_types');
//HELPER FUNCTIONS AND STRUCTURES

var AuthService_login_args = function(args) {
  this.username = null;
  this.password = null;
  if (args) {
    if (args.username !== undefined && args.username !== null) {
      this.username = args.username;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
AuthService_login_args.prototype = {};
AuthService_login_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.username = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthService_login_args.prototype.write = function(output) {
  output.writeStructBegin('AuthService_login_args');
  if (this.username !== null && this.username !== undefined) {
    output.writeFieldBegin('username', Thrift.Type.STRING, 1);
    output.writeString(this.username);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 2);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthService_login_result = function(args) {
  this.success = null;
  this.loginError = null;
  if (args instanceof ttypes.LoginError) {
    this.loginError = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.LoginResult(args.success);
    }
    if (args.loginError !== undefined && args.loginError !== null) {
      this.loginError = args.loginError;
    }
  }
};
AuthService_login_result.prototype = {};
AuthService_login_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.LoginResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.loginError = new ttypes.LoginError();
        this.loginError.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthService_login_result.prototype.write = function(output) {
  output.writeStructBegin('AuthService_login_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.loginError !== null && this.loginError !== undefined) {
    output.writeFieldBegin('loginError', Thrift.Type.STRUCT, 1);
    this.loginError.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthService_refresh_auth_args = function(args) {
  this.auth_token = null;
  this.refresh_token = null;
  if (args) {
    if (args.auth_token !== undefined && args.auth_token !== null) {
      this.auth_token = args.auth_token;
    }
    if (args.refresh_token !== undefined && args.refresh_token !== null) {
      this.refresh_token = args.refresh_token;
    }
  }
};
AuthService_refresh_auth_args.prototype = {};
AuthService_refresh_auth_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.auth_token = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.refresh_token = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthService_refresh_auth_args.prototype.write = function(output) {
  output.writeStructBegin('AuthService_refresh_auth_args');
  if (this.auth_token !== null && this.auth_token !== undefined) {
    output.writeFieldBegin('auth_token', Thrift.Type.STRING, 1);
    output.writeString(this.auth_token);
    output.writeFieldEnd();
  }
  if (this.refresh_token !== null && this.refresh_token !== undefined) {
    output.writeFieldBegin('refresh_token', Thrift.Type.STRING, 2);
    output.writeString(this.refresh_token);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthService_refresh_auth_result = function(args) {
  this.success = null;
  this.authError = null;
  this.loginError = null;
  if (args instanceof ttypes.AuthError) {
    this.authError = args;
    return;
  }
  if (args instanceof ttypes.LoginError) {
    this.loginError = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.authError !== undefined && args.authError !== null) {
      this.authError = args.authError;
    }
    if (args.loginError !== undefined && args.loginError !== null) {
      this.loginError = args.loginError;
    }
  }
};
AuthService_refresh_auth_result.prototype = {};
AuthService_refresh_auth_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.authError = new ttypes.AuthError();
        this.authError.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.loginError = new ttypes.LoginError();
        this.loginError.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthService_refresh_auth_result.prototype.write = function(output) {
  output.writeStructBegin('AuthService_refresh_auth_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.authError !== null && this.authError !== undefined) {
    output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
    this.authError.write(output);
    output.writeFieldEnd();
  }
  if (this.loginError !== null && this.loginError !== undefined) {
    output.writeFieldBegin('loginError', Thrift.Type.STRUCT, 2);
    this.loginError.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthService_get_user_args = function(args) {
  this.auth_token = null;
  if (args) {
    if (args.auth_token !== undefined && args.auth_token !== null) {
      this.auth_token = args.auth_token;
    }
  }
};
AuthService_get_user_args.prototype = {};
AuthService_get_user_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.auth_token = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthService_get_user_args.prototype.write = function(output) {
  output.writeStructBegin('AuthService_get_user_args');
  if (this.auth_token !== null && this.auth_token !== undefined) {
    output.writeFieldBegin('auth_token', Thrift.Type.STRING, 1);
    output.writeString(this.auth_token);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthService_get_user_result = function(args) {
  this.success = null;
  this.authError = null;
  if (args instanceof ttypes.AuthError) {
    this.authError = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.User(args.success);
    }
    if (args.authError !== undefined && args.authError !== null) {
      this.authError = args.authError;
    }
  }
};
AuthService_get_user_result.prototype = {};
AuthService_get_user_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.User();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.authError = new ttypes.AuthError();
        this.authError.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthService_get_user_result.prototype.write = function(output) {
  output.writeStructBegin('AuthService_get_user_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.authError !== null && this.authError !== undefined) {
    output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
    this.authError.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthServiceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
AuthServiceClient.prototype = {};
AuthServiceClient.prototype.seqid = function() { return this._seqid; };
AuthServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };

AuthServiceClient.prototype.login = function(username, password, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_login(username, password);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_login(username, password);
  }
};

AuthServiceClient.prototype.send_login = function(username, password) {
  var output = new this.pClass(this.output);
  var params = {
    username: username,
    password: password
  };
  var args = new AuthService_login_args(params);
  try {
    output.writeMessageBegin('login', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AuthServiceClient.prototype.recv_login = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AuthService_login_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.loginError) {
    return callback(result.loginError);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('login failed: unknown result');
};

AuthServiceClient.prototype.refresh_auth = function(auth_token, refresh_token, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_refresh_auth(auth_token, refresh_token);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_refresh_auth(auth_token, refresh_token);
  }
};

AuthServiceClient.prototype.send_refresh_auth = function(auth_token, refresh_token) {
  var output = new this.pClass(this.output);
  var params = {
    auth_token: auth_token,
    refresh_token: refresh_token
  };
  var args = new AuthService_refresh_auth_args(params);
  try {
    output.writeMessageBegin('refresh_auth', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AuthServiceClient.prototype.recv_refresh_auth = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AuthService_refresh_auth_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.authError) {
    return callback(result.authError);
  }
  if (null !== result.loginError) {
    return callback(result.loginError);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('refresh_auth failed: unknown result');
};

AuthServiceClient.prototype.get_user = function(auth_token, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_get_user(auth_token);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_get_user(auth_token);
  }
};

AuthServiceClient.prototype.send_get_user = function(auth_token) {
  var output = new this.pClass(this.output);
  var params = {
    auth_token: auth_token
  };
  var args = new AuthService_get_user_args(params);
  try {
    output.writeMessageBegin('get_user', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AuthServiceClient.prototype.recv_get_user = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AuthService_get_user_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.authError) {
    return callback(result.authError);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get_user failed: unknown result');
};
var AuthServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
AuthServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
AuthServiceProcessor.prototype.process_login = function(seqid, input, output) {
  var args = new AuthService_login_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.login.length === 2) {
    Q.fcall(this._handler.login.bind(this._handler),
      args.username,
      args.password
    ).then(function(result) {
      var result_obj = new AuthService_login_result({success: result});
      output.writeMessageBegin("login", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.LoginError) {
        result = new AuthService_login_result(err);
        output.writeMessageBegin("login", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("login", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.login(args.username, args.password, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.LoginError) {
        result_obj = new AuthService_login_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("login", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("login", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AuthServiceProcessor.prototype.process_refresh_auth = function(seqid, input, output) {
  var args = new AuthService_refresh_auth_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.refresh_auth.length === 2) {
    Q.fcall(this._handler.refresh_auth.bind(this._handler),
      args.auth_token,
      args.refresh_token
    ).then(function(result) {
      var result_obj = new AuthService_refresh_auth_result({success: result});
      output.writeMessageBegin("refresh_auth", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.AuthError || err instanceof ttypes.LoginError) {
        result = new AuthService_refresh_auth_result(err);
        output.writeMessageBegin("refresh_auth", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("refresh_auth", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.refresh_auth(args.auth_token, args.refresh_token, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.AuthError || err instanceof ttypes.LoginError) {
        result_obj = new AuthService_refresh_auth_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("refresh_auth", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("refresh_auth", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AuthServiceProcessor.prototype.process_get_user = function(seqid, input, output) {
  var args = new AuthService_get_user_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.get_user.length === 1) {
    Q.fcall(this._handler.get_user.bind(this._handler),
      args.auth_token
    ).then(function(result) {
      var result_obj = new AuthService_get_user_result({success: result});
      output.writeMessageBegin("get_user", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.AuthError) {
        result = new AuthService_get_user_result(err);
        output.writeMessageBegin("get_user", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("get_user", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.get_user(args.auth_token, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.AuthError) {
        result_obj = new AuthService_get_user_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("get_user", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("get_user", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
