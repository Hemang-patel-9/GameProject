//needed variables
let num = 0,
  player = 1;
let blockId1 = 1;
let blockId2 = 1;

//color giving start
function init() {
  for (x = 1; x <= 100; x++) {
    if (num == 0) {
      document.getElementById("box" + x).style.backgroundColor =
        "rgb(184, 0, 73)";
      num++;
    } else if (num == 1) {
      document.getElementById("box" + x).style.backgroundColor = "rgb(0,255,0)";
      num++;
    } else if (num == 2) {
      document.getElementById("box" + x).style.backgroundColor =
        "rgb(255,255,0)";
      num++;
    } else if (num == 3) {
      document.getElementById("box" + x).style.backgroundColor =
        "rgb(22, 167, 255)";
      num++;
    } else if (num == 4) {
      document.getElementById("box" + x).style.backgroundColor =
        "rgb(255, 0, 255)";
      num++;
    } else {
      document.getElementById("box" + x).style.backgroundColor =
        "rgb(255, 255, 255)";
      num = 0;
    }
  }
}
///color giving end
//dice flipping and get random values start
function FlippingDice() {
  let num = Math.ceil(Math.random() * 6);
  if (num == 1) {
    document.getElementById("diceIMG" + player).src = "1.png";
  } else if (num == 2) {
    document.getElementById("diceIMG" + player).src = "2.png";
  } else if (num == 3) {
    document.getElementById("diceIMG" + player).src = "3.png";
  } else if (num == 4) {
    document.getElementById("diceIMG" + player).src = "4.png";
  } else if (num == 5) {
    document.getElementById("diceIMG" + player).src = "5.png";
  } else if (num == 6) {
    document.getElementById("diceIMG" + player).src = "6.png";
  }
  if (player == 1) {
    runPawn(num, player);
    player = 2;
  } else {
    runPawn(num, player);
    player = 1;
  }
}
//dice flipping and get random values end
//Running Pawns as per dice number start
function runPawn(num, player) {
  alert(num + " with player = " + player);
  if (player != 2 && player != 1) {
    alert("Something Went Wrong <? SERVER ERROR ?>");
    if (confirm("Do you want to play again?")) {
      location.reload();
    } else {
      alert("Thank you For playing with us!");
    }
  }
  let p1 = document.getElementById("pawns1");
  let p2 = document.getElementById("pawns2");
  if (player == 1) {
    blockId1 += num;
    blockId1 = restricted(blockId1, num);
    document.getElementById("box" + blockId1).append(p1);
    let TFBLOCK = 0;
    TFBLOCK = Number.parseInt(checkDyingOrSteping(blockId1));
    if (TFBLOCK != 0) {
      blockId1 = TFBLOCK;
      document.getElementById("box" + blockId1).append(p1);
    }
    if (blockId2 == Number.parseInt(100)) {
      gameOver();
    }
  } else if (player == 2) {
    blockId2 += num;
    blockId2 = restricted(blockId2, num);
    document.getElementById("box" + blockId2).append(p2);
    let TFBLOCK = 0;
    TFBLOCK = Number.parseInt(checkDyingOrSteping(blockId2));
    if (TFBLOCK != 0) {
      blockId2 = TFBLOCK;
      document.getElementById("box" + blockId2).append(p2);
    }
    if (blockId2 == Number.parseInt(100)) {
      gameOver();
    }
  } else {
    errorFunction();
  }
}
//Running Pawns as per dice number end
//check the pawn will step up or eaten by snake start
function checkDyingOrSteping(blockID) {
  Number.parseInt(blockID);
  if (blockID == Number.parseInt(10)) {
    blockID = 50;
    return blockID;
  } else if (blockID == Number.parseInt(15)) {
    blockID = 52;
    return blockID;
  } else if (blockID == Number.parseInt(22)) {
    blockID = 44;
    return blockID;
  } else if (blockID == Number.parseInt(46)) {
    blockID = 76;
    return blockID;
  } else if (blockID == Number.parseInt(68)) {
    blockID = 88;
    return blockID;
  } else if (blockID == Number.parseInt(79)) {
    blockID = 99;
    return blockID;
  } else if (blockID == Number.parseInt(97)) {
    blockID = 41;
    return blockID;
  } else if (blockID == Number.parseInt(91)) {
    blockID = 52;
    return blockID;
  } else if (blockID == Number.parseInt(61)) {
    blockID = 39;
    return blockID;
  } else if (blockID == Number.parseInt(57)) {
    blockID = 36;
    return blockID;
  } else if (blockID == Number.parseInt(23)) {
    blockID = 2;
    return blockID;
  } else if (blockID == Number.parseInt(33)) {
    blockID = 8;
    return blockID;
  } else {
    return blockID;
  }
}
//check the pawn will step up or eaten by snake end
//error block start
function errorFunction() {
  alert("Error While Playing Game");
  alert("Sorry!");
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
        location.reload();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
}
function restricted(overNumber, overnum) {
  if (overNumber > 100) {
    return Number.parseInt(overNumber - overnum);
  } else {
    return overNumber;
  }
}
//error block end
//game over teplate start
function gameOver() {}
//game over teplate end
