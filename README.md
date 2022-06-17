# Solidity modifiers

I was recently asked a few questions that caught me off guard. 
- What happens if you reverse the order of `require statement` and `_;` in a modifier?
- What happens if you write some code at the bottom of a modifier, after the `_;`?

Until this moment the only information I had on the subject was from this snipit in the [docs](https://docs.soliditylang.org/en/v0.8.14/contracts.html#function-modifiers): 
```
    // The function body is inserted where the special symbol
    // `_;` in the definition of a modifier appears.
    // This means that if the owner calls this function, the
    // function is executed and otherwise, an exception is
    // thrown.
    modifier onlyOwner {
        require(
            msg.sender == owner,
            "Only owner can call this function.");
        _;
    }
```

After experimenting and writting a few tests I discovered the answers:
- The function's code will run as expected however, if the `require statment` does not pass, the function will revert.
- Code written within the modifier but after the `_;` will also be executed, as long as the `require statment` is true.

Other take aways:
- Multiple modifiers will be evaluated in the order they listed.
- The `_;` can be used (and will cause the body of the function to be run) multiple times within a single modifier.

![Screen Shot 2022-06-16 at 11 27 15 PM](https://user-images.githubusercontent.com/22263098/174219021-a7dbc204-2d59-4c99-ab4b-6d431cec692e.png)
