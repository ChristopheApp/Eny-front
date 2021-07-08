// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "./ENY_Token.sol";
//import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
//import "openzeppelin-solidity/contracts/math/SafeMath.sol";

// 
//  timed crowdsale
//  refundable ? 
//  not minted (transfer from token contract / gnosis at the end)
//  capped by the tokenIco supply (constructor)
// MAX TOKEN DISPO POUR CETTE ICO


contract ENYTokenICO {
    address payable admin;
//    address admin;
    //Eny_Token tokenContract;
    //address tokenContract;
    uint256  tokenPrice;                  // prix token 
    uint256  public tokensSold;                  // tokens vendu
    uint256  public tokenLeft;                   // tokens dispo pour vente
    uint256  tokenIco;                    // totalsupply
    uint256  tokenIcoStart;               // timestamp lancement ICO 

    enum icoStates {WAITING, STARTED, ENDED}
    icoStates public icoState = icoStates.WAITING;  // statut ICO 
    
    
    struct Buyers {
        address addressBuyer;
        uint256 tokenOrder;
        uint256 paid;
        
    }
    Buyers[] icoInvestors;                 // pour gnosis : transfer a la fin ICO des tokens 
    

    /*  ************************************************************************
        EVENTS  
    */
    event Sell(address _buyer, uint256 _tokens, uint256 _balance, uint256 _totalInvestor);
    // Verifier liste events à transmettre à Regis
    
    
    /*  ************************************************************************
        constructor 
    */
//    constructor(Eny_Token _tokenContract, uint256 _tokenPrice, uint256 _TokenICO, address payable _wallet)   {
        constructor(uint256 _tokenPrice, uint256 _TokenICO, address payable _wallet)   {
        // voir avec Gnosis pour admin de ICO
        admin           = _wallet;
        //tokenContract   = _tokenContract;
        tokenPrice      = _tokenPrice;
        tokenIco        = _TokenICO;

//        tokenContract.transferFrom(tokenContract,address(this), _TokenICO);
        launchICO();

    }

    /*  ************************************************************************
        LANCEMENT ICO 
    */
    function launchICO() internal{
        require(icoState == icoStates.WAITING, "Too late, ICO already started !");
        // verfifier owner/admin du Contract
//        tokenLeft = tokenContract.balanceOf(address(this));
        tokenIcoStart   = block.timestamp;
        icoState        = icoStates.STARTED;
        tokenLeft       = tokenIco;
    }



    /*  ************************************************************************
        ACHAT DE TOKEN 
    */
    function buyTokens(uint256 _numberOfTokens) public payable{
        require(icoState==icoStates.STARTED);
//        require(msg.value == multiply(_numberOfTokens, tokenPrice));
        require(tokenLeft >= _numberOfTokens, "NO MORE TOKEN TO SELL");
//        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
//        require(tokenContract.transferFrom(address(this), msg.sender, _numberOfTokens));

        icoInvestors.push(Buyers(msg.sender,_numberOfTokens, msg.value));
        
        tokensSold += _numberOfTokens;
        tokenLeft -= _numberOfTokens;
        
        // Voir pour faire transfer vers le Wallet directement... ?

        emit Sell(msg.sender, _numberOfTokens, address(this).balance, icoInvestors.length );
    }



    /*  ************************************************************************
        FORCE FIN ICO (MANUELLEMENT ou non a voir)
    */
    function endSale() public payable{
        require(msg.sender == admin);
        require(icoState != icoStates.ENDED, " ICO already ended ...");
        
        //require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));

        // change state before transfer (anti re entrance)
        // Just transfer the balance to the admin
        icoState = icoStates.ENDED;
        admin.transfer(address(this).balance);
        
    }
    
     /*  ************************************************************************
        Balance de l'ICO 
    */
    function getBalance() public view returns (uint) {
        require(msg.sender == admin);
        return (address(this).balance);
   }

     /*  ************************************************************************
        Investisseurs de l'ICO 
    */
    function getInvestors() public view returns (Buyers[] memory) {
        require(msg.sender == admin);
        return (icoInvestors);
   }


     /*  ************************************************************************
        MULT 
    */
    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

}