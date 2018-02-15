/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */

exports.example = () => {
    return 'hello world';
};

exports.stripPrivateProperties = (properties, items) => {
    var resultArr = [];
    items.forEach(item => {
        var resItem = {};
        Object.keys(item).forEach(key => {
            if (properties.indexOf(key) < 0) {
                resItem[key] = item[key];
            }
        });
        resultArr.push(resItem);
    });
    return resultArr;
};

exports.excludeByProperty = (property, items) => {
    var resultArr = items.filter(item => !item.hasOwnProperty(property));
    return resultArr;
};

exports.sumDeep = (items) => {
    var resultArr = [];
    items.forEach(item => {
        var resItem = { objects: 0 };
        item.objects.forEach(o => {
            resItem.objects += o.val;
        });
        resultArr.push(resItem);
    });
    return resultArr;
};

exports.applyStatusColor = (statusCodes, items) => {
    var statusCodesFlattened = [];
    Object.keys(statusCodes).forEach(color => {
        var arr = statusCodes[color].map(code => {
            var obj = {};
            obj.code = code;
            obj.color = color;
            return obj;
        });
        statusCodesFlattened = statusCodesFlattened.concat(arr);
    });

    var res = [];
    items.forEach(item => {
        var colorItem = statusCodesFlattened.find(i => i.code === item.status);
        if (colorItem) {
            item.color = colorItem.color;
            res.push(item);
        }
    });
    return res;

};

exports.createGreeting = (greetFn, message) => {
    return (name) => {
        return greetFn(message, name);
    };
};

exports.setDefaults = (defaults) => {
    return (user) => {
        return Object.assign({}, defaults, user);
    }
};

exports.sanitizeUser = (user) => {

    // Create a helper that gets first name
    function getFirstName(fullName) {
        var firstName = '';
        if (fullName) {
            firstName = fullName.split(' ')[0];
        }
        return firstName;
    }

    user.firstName = getFirstName(user.name);

    // Ensure a user has an `fullAddress` property by combining `address.streetNum, address.streetName, address.suburb`
    if (user.address.num && user.address.street && user.address.suburb) {
        user.fullAddress = user.address.num + ' ' + user.address.street + ', ' + user.address.suburb;
    }

    // The given user always returns the `monthJoined` as 0 to 11. We need it to be 1 to 12 so add 1.
    user.monthJoined +=  1;
    return user;
};

