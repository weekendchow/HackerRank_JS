// Add your code here
let leftHeight = 0
let rightHeight = 0
if(root.left!=null){
  leftHeight = this.getHeight(root.left)+1
}
if(root.right!=null){
    rightHeight = this.getHeight(root.right)+1
}
return rightHeight>leftHeight ? rightHeight : leftHeight
