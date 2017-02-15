/*
 *  Java Program to Implement Singly Linked List
 */
 
import java.util.Scanner;
 
/*  Class Node  */
class Node
{
    protected int data;
    protected Node link;
 
    /*  Constructor  */
    public Node()
    {
        link = null;
        data = 0;
    }    
    /*  Constructor  */
    public Node(int d,Node n)
    {
        data = d;
        link = n;
    }    
    /*  Function to set link to next Node  */
    public void setLink(Node n)
    {
        link = n;
    }    
    /*  Function to set data to current Node  */
    public void setData(int d)
    {
        data = d;
    }    
    /*  Function to get link to next node  */
    public Node getLink()
    {
        return link;
    }    
    /*  Function to get data from current Node  */
    public int getData()
    {
        return data;
    }
}
 
/* Class linkedList */
class linkedList
{
    protected Node start;
    protected Node end ;
    public int size ;
 
    /*  Constructor  */
    public linkedList()
    {
        start = null;
        end = null;
        size = 0;
    }
    /*  Function to check if list is empty  */
    public boolean isEmpty()
    {
        return start == null;
    }
    /*  Function to get size of list  */
    public int getSize()
    {
        return size;
    }    

    /*  Function to insert an element at end  */
    public void insert(int val)
    {
        Node nptr = new Node(val,null);    
        size++ ;    
        if(start == null) 
        {
            start = nptr;
            end = start;
        }
        else 
        {
            end.setLink(nptr);
            end = nptr;
        }
    }

    /*  Function to delete an element  */
    public int delete()
    {        

        if (size >0) 
        {
            Node s = start;
            Node t = start;
            while (s != end)
            {
                t = s;
                s = s.getLink();
            }
            end = t;
            end.setLink(null);
            size --;
            return;
        }else{

	}
        Node ptr = start;

        for (int i = 1; i < size - 1; i++) 
        {
            if (i == size - 2) 
            {
                Node tmp = ptr.getLink();
                int data = tmp.getData();
                ptr.setLink(null);
		return data;
            }
            ptr = ptr.getLink();
        }
        size-- ;
    }    
    /*  Function to display elements  */
    public void display()
    {
        System.out.print("\nStack = ");
        if (size == 0) 
        {
            System.out.print("empty\n");
            return;
        }    
        if (start.getLink() == null) 
        {
            System.out.println(start.getData() );
            return;
        }
        Node ptr = start;
        System.out.print(start.getData()+ "->");
        ptr = start.getLink();
        while (ptr.getLink() != null)
        {
            System.out.print(ptr.getData()+ "->");
            ptr = ptr.getLink();
        }
        System.out.print(ptr.getData()+ "\n");
    }
}
 
/*  Class SinglyLinkedList  */
public class SinglyLinkedList
{    
    public static void main(String[] args)
    {             
        Scanner scan = new Scanner(System.in);
        /* Creating object of class linkedList */
        linkedList list = new linkedList(); 
        System.out.println("Singly Linked List Test\n");          
        char ch;
        /*  Perform list operations  */
        do
        {
            System.out.println("\nStack Operations\n");
            System.out.println("1. Push");
            System.out.println("2. Pop");
            System.out.println("3. Dsiplay");            
            int choice = scan.nextInt();            
            switch (choice)
            {
            case 1 :
                System.out.println("Enter integer element to Push");
                list.insert( scan.nextInt() );                     
                break;                         
            case 2 : 
                 System.out.println("Poped Element is ::"+list.delete());
                break;
            case 3 : 
               list.display();
                break;                   
                           
             default : 
                System.out.println("Wrong Entry \n ");
                break;   
            }
            /*  Display List  */ 
            list.display();
            System.out.println("\nDo you want to continue (Type y or n) \n");
            ch = scan.next().charAt(0);                        
        } while (ch == 'Y'|| ch == 'y');               
    }
}
