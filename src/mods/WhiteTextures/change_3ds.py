import c4d

def apply_axis(op,new_m):
    
    loc_m = ~new_m * op.GetMg() #Get local matrix

    op.SetAllPoints([loc_m.Mul(p) for p in op.GetAllPoints()])
    op.SetMg(new_m)
    
    op.Message(c4d.MSG_UPDATE)
    c4d.EventAdd()
    
def main():
    
    doc = c4d.documents.GetActiveDocument()
    
    gg = doc.GetActiveObject()
    
    m = gg.GetMl()
    m.off = c4d.Vector(0,0,0)
    gg.SetMl(m)
    
    tt = filter(lambda x: isinstance(x,c4d.TextureTag),gg.GetTags())[0]
    for each in op.GetChildren():
        each.KillTag(5616)
        each.InsertTag(tt)
    
    c4d.CallCommand(1019951, 1019951) # Delete Without Children
    c4d.CallCommand(100004766) # Select All
    c4d.CallCommand(16768, 16768) # Connect Objects + Delete
    c4d.CallCommand(100004766) # Select All
    
    gg = doc.GetActiveObject()

    m = gg.GetMl()
    m.off = c4d.Vector(0,0,0)
    apply_axis(gg,m)

    c4d.CallCommand(60000, 12) # Export Filter
    c4d.CallCommand(12664, 12664) # Close
    
if __name__=='__main__':
    main()