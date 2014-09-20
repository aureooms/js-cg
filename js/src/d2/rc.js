

var __rc__ = function(sinsign){

	/**
	 * Returns true if _c_ lies to the right of segment _ab_
	 * or if _a_ , _b_ and _c_ are colinear.
	 */

	var rc = function(a, b, c){
		return sinsign(a, b, c) <= 0;
	};

	return rc;
};

exports.__rc__ = __rc__;
